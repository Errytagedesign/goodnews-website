import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner, Table } from "react-bootstrap";
import { deletePost } from "../../actions/posts";
import Swal from "sweetalert2";
// import Styled from "styled-components";

export default function Tables({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  // console.log(posts)

  async function delPost(id) {
    // dispatch(deletePost(id));
    Swal.fire({
      title: "Are you sure you want to delete this Post?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      preConfirm: () => {
        return dispatch(deletePost(id));
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  return !posts.length ? (
    <Spinner />
  ) : (
    <div>
      <Table striped bordered hover className="mt-4">
        <thead bgcolor="#034203" style={{ color: "#fff" }}>
          <tr className="mt-3 ">
            <th align="center">Title</th>
            <th align="center">Category</th>
            <th align="center">Name Of Author</th>
            <th align="center">Last Published</th>
            <th align="center">Edit</th>
            <th align="center">Delete</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((row) => (
            <tr key={row._id}>
              <td align="center">{row.title}</td>
              <td align="center">{row.category.title}</td>
              <td align="center">{row.nameOfAuthor}</td>
              <td align="center">{row.updatedAt}</td>
              <td align="center">
                <Button
                  onClick={() => {
                    setCurrentId(row._id);
                    // window.scrollTo({
                    //   top: 2000,
                    //   behavior: "smooth",
                    // });
                    setTimeout(() => {
                      window.location.href = "#id";
                    }, 2000);
                  }}
                  variant="success"
                >
                  {" "}
                  Edit{" "}
                </Button>

                {/* <Link
                  to={`/updatepublishednews?id=${row._id}`}
                  onClick={() => setCurrentId(row._id)}
                >
                  {" "}
                  Edit{" "}
                </Link> */}
              </td>
              <td align="center">
                <Button onClick={() => delPost(row._id)} variant="danger">
                  {" "}
                  Delete{" "}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
