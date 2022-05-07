import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h1 className='fw-bold text-danger mt-4'>My Services</h1>

            <div className='blog-container container'>

                <div className='blog-div  '>
                    <h2 className='mt-4'>Differences between sql and nosql databases.</h2>
                    <hr />
                    <p className='blog-text'>1.SQL databases are relational, NoSQL databases are non-relational. <br /> 2.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br /> 3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />4.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />5.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
                <div className='blog-div'>
                    <h2 className='mt-1'>When should you use nodejs and when should you use mongodb</h2>
                    <hr />
                    <p className='blog-text'>While there are quite a number of use cases that Node.js fits perfectly, there are situations when we should look for other platforms, as Node.js will not provide the best performance.Since Node.js uses only one CPU core, heavy computations on the server will block all other requests. In this case, the event-driven non-blocking I/O model which is the strongest side of Node.js will become useless, and the application performance will suffer.For CRUD applications and Server-side web applications with relational databases. <br />NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn’t fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.</p>
                </div>
                <div className='blog-div'>
                    <h2 className='mt-3'>What is the purpose of jwt and how does it work</h2>
                    <hr />
                    <p className='blog-text'> JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted..A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;