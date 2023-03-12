import Head from "next/head";
import { Raleway } from "next/font/google";
import { useState, useRef } from "react";
import TaskItem from "../components/TaskItem";
import { MdDeleteOutline } from "react-icons/md";

const raleway = Raleway({ subsets: ["latin"] });

const initialTodos = [
  { id: 1, done: true, text: "Read Anatomy" },
  { id: 2, done: false, text: "Read Physiology" },
  { id: 3, done: false, text: "Read Biochemistry" },
];

export default function Home() {
  const [todo, setTodo] = useState("");
  const [active, setActive] = useState("completed");
  const [todos, setTodos] = useState(initialTodos);

  let activeTodos = todos.filter((todo) => todo.done === false);
  let completedTodos = todos.filter((todo) => todo.done === true);

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    setTodos([...todos, { id: Math.random(), done: false, text: todo }]);
    // inputRef.current.value = "";
  };

  return (
    <>
      <Head>
        <title>#todo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      <main className={`${raleway.className} text-[#333]`}>
        <h1 className="text-center font-bold text-4xl mt-5">#todo</h1>
        <div className="flex justify-around border-b border-[#bdbdbd] mt-14 mx-auto w-[88%] lg:max-w-[40%] pb-5">
          <button
            className={`${
              active === "all"
                ? "after:absolute after:w-20 after:h-[4px] after:rounded-t-md after:-bottom-5 after:bg-[#2F80ED]"
                : ""
            } relative flex justify-center w-20"`}
            onClick={() => {
              setActive("all");
            }}
          >
            All
          </button>
          <button
            className={`${
              active === "active"
                ? "after:absolute after:w-20 after:h-[4px] after:rounded-t-md after:-bottom-5 after:bg-[#2F80ED]"
                : ""
            } relative flex justify-center w-20"`}
            onClick={() => {
              setActive("active");
            }}
          >
            Active
          </button>
          <button
            className={`${
              active === "completed"
                ? "after:absolute after:w-20 after:h-[4px] after:rounded-t-md after:-bottom-5 after:bg-[#2F80ED]"
                : ""
            } relative flex justify-center"`}
            onClick={() => {
              setActive("completed");
            }}
          >
            Completed
          </button>
        </div>
        <div>
          {active !== "completed" && (
            <form
              className="mx-auto mt-5 w-[88%] lg:max-w-[40%] flex gap-1 justify-between"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="add details"
                className="w-[70%] border p-3 rounded-lg"
                value={todo}
                ref={inputRef}
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              />
              <button className="bg-[#2F80ED] w-[20%] rounded-lg text-white shadow-sm shadow-[#2F80ED]">
                Add
              </button>
            </form>
          )}
          {active === "all" && (
            <ul className="mx-auto mt-5 w-[88%] lg:max-w-[40%]">
              {todos.map((todo) => (
                <TaskItem todo={todo} key={todo.id} />
              ))}
            </ul>
          )}
          {active === "active" && (
            <ul className="mx-auto mt-5 w-[88%] lg:max-w-[40%]">
              {activeTodos.map((todo) => (
                <TaskItem todo={todo} key={todo.id} />
              ))}
            </ul>
          )}
          {active === "completed" && (
            <>
              <ul className="mx-auto mt-5 w-[88%] lg:max-w-[40%]">
                {completedTodos.map((todo) => (
                  <TaskItem todo={todo} key={todo.id} active={active} />
                ))}
              </ul>
              <div className="mx-auto mt-5 w-[88%] lg:max-w-[40%]">
                <button className="bg-[#EB5757] text-white flex justify-center items-center gap-1 px-6 py-3 rounded-md shadow-sm shadow-[#EB5757]">
                  <MdDeleteOutline /> Delete all
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
