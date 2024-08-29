import React from "react";
import DOMPurify from "dompurify";
import useDebounce from "../../Custom-hooks/useDebounce";
import QuillEditor from "../QUILL/QuillEditor";
import style from "../../Pages/BLOG-DETAILS/BlogDetails.module.scss"

const EditCommentModal = ({ editComment, setEditComment, onClose,id, blogId, userId, updateComment }) => {
  // console.log("edit comment", editComment);
// console.log(id);

const  debouncedValue  = useDebounce(editComment)

 const handleEdit =  () => {
  // console.log(editComment);
  // console.log(debouncedValue);

  // const sanitizedContent = DOMPurify.sanitize(editComment, { USE_PROFILES: { html: true } });
  const sanitizedContent = DOMPurify.sanitize(debouncedValue, { USE_PROFILES: { html: true } });
  const content = sanitizedContent
  // console.log(content);
  const editCommentData = {
    content,blogId,userId
  }

  updateComment("blogDetail",id, blogId, editCommentData)

 onClose()
 }

  // console.log(editComment);
  // console.log(debouncedValue);
  return (
    <main style={{marginTop:"1rem"}}>
     <section>
        <QuillEditor value={editComment} onChange={setEditComment} />
      </section>
      <button className={style.button} onClick={handleEdit} style={{ margin:"1rem auto"}}>Submit</button>
      <button className={style.button} onClick={()=> onClose()} style={{ margin:"1rem",backgroundColor:"red"}}>Cancel</button>
    </main>
  );
};

export default EditCommentModal;
