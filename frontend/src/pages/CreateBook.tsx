import React, { useState } from "react";
import { BackButton } from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BooksProps } from "../interfaces/models/books";
import { useSnackbar } from "notistack";
const CreateBook = () => {
  const [bookDataObj, setBookDataObj] = useState<BooksProps>({
    _id: "",
    author: "",
    createdAt: "",
    publishYear: 0,
    title: "",
    updatedAt: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = {
      title: bookDataObj.title,
      author: bookDataObj.author,
      publishYear: bookDataObj.publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        // alert("An error occured. Please check console.");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mar-4 text-gray-500">Title</label>
          <input
            type="text"
            value={bookDataObj.title}
            onChange={(e) =>
              setBookDataObj((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mar-4 text-gray-500">Author</label>
          <input
            type="text"
            value={bookDataObj.author}
            onChange={(e) =>
              setBookDataObj((prev) => ({
                ...prev,
                author: e.target.value,
              }))
            }
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mar-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={bookDataObj.publishYear === 0 ? "" : bookDataObj.publishYear}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value))) {
                setBookDataObj((prev) => ({
                  ...prev,
                  publishYear: Number(e.target.value),
                }));
              }
            }}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
