import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className="blog-page">
                <h1 className="text-center">CSS Grid Layout</h1>
            </div>
            <Container>
                <div className="blog-title">
                    <h2>Css Grid System:</h2>
                    <p>Today we are going to know about css grid layout system. With css grid layout we make our website responsive. Let’s see css Grid's properties and how it works.</p>
                    <ul>
                        <li><strong>CSS Grid Architecture</strong></li>
                        <p>In css grid architecture works like excel software. We can join multiple rows and columns</p>
                        <li><strong>CSS Grid Chart</strong></li>
                        <p>Grid chart properties are divided into : <br />
                            <strong>
                                A. Parent properties <br />
                                B. Child Properties
                            </strong> <br />
                            <strong>Parent Properties:</strong>
                            <div>
                                <ul>
                                    <li>Grid-template-columns</li>
                                    <li>Grid-template-rows</li>
                                    <li>Grid-template-areas</li>
                                    <li>columns  & row gaps</li>
                                    <li>Justify-items</li>
                                    <li>Align-items</li>
                                    <li>Justify-content</li>
                                    <li>Align-content</li>
                                    <li>Place-item</li>
                                    <li>Place-content</li>
                                </ul>
                            </div><br />
                            <strong>Child Properties:</strong>
                            <div>
                                <ul>
                                    <li>Grid-columns: start/end</li>
                                    <li>Grid-row: start/end</li>
                                    <li>Grid-area</li>
                                    <li>Justify-self</li>
                                    <li>Align-self</li>
                                    <li>Place-self</li>
                                </ul>
                            </div>
                            <br />
                            <h3>The grid-template-columns property:</h3>
                            <div>
                                <p>
                                    Grid-template-columns we can use number and width of columns. We can set each colums width individually Or, set a uniform width for all columns using the repeat() function.
                                </p>
                                <br />
                                <strong> grid-template-columns: 200px auto 100px;</strong> <br />
                                <p>
                                    That’s mean first element have 200px width mid element have auto width and lest element have 100px.
                                </p>
                                <strong> Grid-template-columns: repeat(3, 1fr);</strong> <br />
                                <p>
                                    That’s mean all element have eqalt width. We use hare repeat() function.
                                </p>
                            </div>
                            <h3>The grid-template-rows property: </h3>
                            <div>
                                <p>
                                    Grid-template-columns we can use number and height of columns. We can set each columns height individually Or, set a uniform height for all columns using the repeat() function.
                                </p>
                                <br />
                                <strong> grid-template-rows:  200px auto 100px;</strong> <br />
                                <p>
                                    That’s mean first element have 200px height mid element have auto height and lest element has 100px height.
                                </p>
                                <strong> Grid-template-rows: repeat(3, 1fr);</strong> <br />
                                <p>
                                    That’s mean all element have eqalt height. We use hare repeat() function.
                                </p>
                            </div>
                            <h3>The grid-template-areas property: </h3>
                            <div>
                                <p>Grid template areas are parent properties <br />
                                    grid-template-areas: <br />
                                    "A A A A   A A A A   A A A A" <br />
                                    "B B B B   B B B B   B B C C"<br />
                                    "B B B B   B B B B   B B C C"<br />
                                </p>
                            </div>

                        </p>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Blog;