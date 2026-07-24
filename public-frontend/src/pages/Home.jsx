import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useEffect, useState } from "react";
import api from "../utils/api";

const Home = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await api.get("/pages");
      setPages(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>CMS Public Frontend</h1>

      {pages.length === 0 ? (
        <p>No Pages Found</p>
      ) : (
        pages.map((page) => (
          <div
            key={page._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
            }}
          >
            <h2>{page.title}</h2>
            <p>
              <strong>Slug:</strong> {page.slug}
            </p>
            <p>
  <strong>Content:</strong>
</p>

<div
  className="markdown"
  style={{
    marginTop: "10px",
  }}
>
  <ReactMarkdown
    remarkPlugins={[remarkGfm, remarkMath]}
    rehypePlugins={[rehypeKatex]}
  >
    {page.content}
  </ReactMarkdown>
</div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;