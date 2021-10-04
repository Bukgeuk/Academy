import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styles from './MarkdownRenderer.module.scss'

interface markdownProps {
    children: string
}

const InlineCodeBlock = (props: { children: React.ReactNode & React.ReactNode[] }) => {
    return <span className={styles.InlineCodeStyle}>{props.children}</span>
}

const BlockQuote = (props: { children: React.ReactNode & React.ReactNode[] }) => {
    return <blockquote className={styles.BlockQuoteStyle}>{props.children}</blockquote>
}

const MarkdownRenderer = (props: markdownProps) => {
    return (
        <div className={styles.MarkDownStyle}>
            <ReactMarkdown remarkPlugins={[remarkMath]} 
            components={{
                code({node, inline, className, children, ...props}) {
                    if (inline) {
                        return <InlineCodeBlock>{children}</InlineCodeBlock>
                    } else {
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                          <div className={styles.allowDrag}>
                              <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={androidstudio}
                                language={match[1]}
                                PreTag="div"  
                            />
                          </div>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        )
                    }
                },
                blockquote({...props}) {
                    return <BlockQuote>{props.children}</BlockQuote>
                }
            }}>
                {props.children}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownRenderer;