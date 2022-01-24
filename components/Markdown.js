import React from "react"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remark2rehype from "remark-rehype"
import rehype2react from "rehype-react"
//import styles from './Markdown.module.css';

const Markdown = ({ text }) => {
  const mdtext = unified()
    .use(remarkParse)
    .use(remark2rehype)
    .use(rehype2react)
    .processSync(text).result
  return (
    <div itemProp="articleBody" className={styles.content}>
      {mdtext}
    </div>
  )
}

export default Markdown
