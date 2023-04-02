import CodeMirror from "@uiw/react-codemirror";
import Form from "react-bootstrap/Form";

function CodeForm(props) {
  return (
    <Form className="p-3">
      <h5 className="font-monospace">Editor SPARC</h5>
      <CodeMirror
        value={props.editor}
        height="65vh"
        options={{
          theme: "dracula",
        }}
        onChange={(val) => {
          props.setEditor(val);
          localStorage.setItem("code-sparc", props.editor);
        }}
      />
    </Form>
  );
}

export default CodeForm;
