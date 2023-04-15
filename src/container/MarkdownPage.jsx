import { useState } from "react";
import { marked } from "marked";

function MarkdownPage() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
 {
   "firstName": "John",
   "lastName": "Smith",
   "age": 25
 }	
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <>
      <div className="grid grid-cols-2 place-items-center py-12 h-screen bg-secondary ">
        <div className=" h-full w-[80%] ">
          <textarea
            className="border border-black h-full w-full rounded-3xl"
            id="editor"
            onChange={(event) => {
              setText(event.target.value);
            }}
            value={text}
          ></textarea>
        </div>
        <div className="border-red-800 rounded-xl h-full w-[80%] bg-white/50 backdrop-blur-3xl ">
          <div
            id="preview"
            className="prose border-red-800 w-full h-full "
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default MarkdownPage;
