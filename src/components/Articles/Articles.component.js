import React, {useEffect, useState} from 'react';
import {Skeleton} from "skeleton/skeleton";
import style from './_Articles.module.scss'

const ArticlesComponent = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setArticles(data)
        }, 5000)
    })

    const dataNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div>
            <h2>Articles</h2>

            {articles && (
                articles.map(article => (
                    <div className={style.article} key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                    </div>
                ))
            )}
            {!articles && dataNumber.map((item,index) => (
                <Skeleton key={index} mode={'article'} animation={'wave'}/>
            ))}
        </div>
    );
};

export {ArticlesComponent};