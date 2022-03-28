import React from 'react';
import './Document.css'

const DocumentPage = (props) => {
    const componentRaw = `<Skeleton />`
    const skeletonRaw = {
        1: `<Skeleton mode={'article'} animation={'pulse'} sx={{width: '20%'}}/>`,
        2: `<Skeleton mode={'article'} animation={'wave'} sx={{width: '500px'}}/>`,
        3: `<Skeleton mode={'profile'} animation={'pulse'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        4: `<Skeleton mode={'profile'} animation={'wave'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        5: `<Skeleton mode={'h1'} animation={'wave'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        6: `<Skeleton mode={'h1'} animation={'pulse'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        7: `<Skeleton mode={'h2'} animation={'wave'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        8: `<Skeleton mode={'h2'} animation={'pulse'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        9: `<Skeleton mode={'h3'} animation={'wave'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        10: `<Skeleton mode={'h3'} animation={'pulse'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        11: `<Skeleton mode={'h4'} animation={'wave'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        12: `<Skeleton mode={'h4'} animation={'pulse'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        13: `<Skeleton mode={'h5'} animation={'wave'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        14: `<Skeleton mode={'h5'} animation={'pulse'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        15: `<Skeleton mode={'h6'} animation={'wave'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        16: `<Skeleton mode={'h6'} animation={'pulse'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        17: `<Skeleton mode={'body'} animation={'wave'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        18: `<Skeleton mode={'body'} animation={'pulse'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        19: `<Skeleton mode={'title'} animation={'wave'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        20: `<Skeleton mode={'title'} animation={'pulse'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        21: `<Skeleton mode={'caption'} animation={'wave'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        22: `<Skeleton mode={'caption'} animation={'pulse'} sx={{width: '50%', backgroundColor: 'gray'}}/>`,
        23: `<Skeleton animation={'wave'} mode={'post'} sx={{width: '15rem', height: '12rem', backgroundColor: 'gray'}}/>`,
        24: `<Skeleton animation={'wave'} mode={'post'} sx={{width: '15rem', height: '12rem', backgroundColor: 'gray'}}/>`
    }
    return (
        <div className={'container'}>
            <h2>Document</h2>
            <p style={{lineHeight: '2rem'}}>
                This app is designed for skeletons to use when contents are loading!
                <br/>
                It is very easy to use...
                <br/>
                <span style={{color: 'red', fontSize: '1.6rem', fontWeight: '700'}}>How? Let's go</span>
                <br/>
                use this component every where you want to have skeleton before load the contents
            </p>
            <samp>
                {
                    componentRaw
                }
            </samp>


            <h4 className={'propsTitle'}>Props</h4>
            <div className="table">
                <table>
                    <thead className={'tableHeader'}>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>mode</td>
                        <td>
                            String
                        </td>
                        <td>
                            'article'
                        </td>
                        <td>
                            This props accepts: <pre>
                                article, profile, post, h1, h2, h3, h4, h5, h6, title, body, caption
                                </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>animation</td>
                        <td>
                            String
                        </td>
                        <td>
                            'wave'
                        </td>
                        <td>
                            animation of skeleton. It accepts <pre>wave - pulse</pre>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            sx
                        </td>
                        <td>
                            Object
                        </td>
                        <td>-</td>
                        <td>
                                <pre>
                                    width, height, backgroundColor

                                </pre>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="table">
                <table>
                    <thead className={'tableHeader'}>
                    <tr>
                        <th>Mode</th>
                        <th>Implementation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>article</td>
                        <td>
                            <pre>
                                {skeletonRaw[1]}
                                <br/>
                                {skeletonRaw[2]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>profile</td>
                        <td>
                            <pre>
                                {skeletonRaw[3]}
                                <br/>
                                {skeletonRaw[4]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>h1</td>
                        <td>
                            <pre>
                                {skeletonRaw[5]}
                                <br/>
                                {skeletonRaw[6]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>h2</td>
                        <td>
                            <pre>
                                {skeletonRaw[7]}
                                <br/>
                                {skeletonRaw[8]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>h3</td>
                        <td>
                            <pre>
                                {skeletonRaw[9]}
                                <br/>
                                {skeletonRaw[10]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>h4</td>
                        <td>
                            <pre>
                                {skeletonRaw[11]}
                                <br/>
                                {skeletonRaw[12]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>h5</td>
                        <td>
                            <pre>
                                {skeletonRaw[13]}
                                <br/>
                                {skeletonRaw[14]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>h6</td>
                        <td>
                            <pre>
                                {skeletonRaw[15]}
                                <br/>
                                {skeletonRaw[16]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>body</td>
                        <td>
                            <pre>
                                {skeletonRaw[17]}
                                <br/>
                                {skeletonRaw[18]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>
                            <pre>
                                {skeletonRaw[19]}
                                <br/>
                                {skeletonRaw[20]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>caption</td>
                        <td>
                            <pre>
                                {skeletonRaw[21]}
                                <br/>
                                {skeletonRaw[22]}
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>post</td>
                        <td>
                            <pre>
                                {skeletonRaw[23]}
                                <br/>
                                {skeletonRaw[24]}
                            </pre>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="table">
                <table>
                    <thead className={'tableHeader'}>
                    <tr>
                        <th>Mode</th>
                        <th>Accept sx</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>article</td>
                        <td>
                            width
                        </td>
                    </tr>
                    <tr>
                        <td>profile</td>
                        <td>
                            width, backgroundColor
                        </td>
                    </tr>
                    <tr>
                        <td>(Typography mode) h1, h2, h3, h4, h5, h6, title, body, caption</td>
                        <td>
                            width, backgroundColor
                        </td>
                    </tr>
                    <tr>
                        <td>post</td>
                        <td>
                            width, height, backgroundColor
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export {DocumentPage};