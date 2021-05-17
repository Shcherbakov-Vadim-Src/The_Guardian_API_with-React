import React, { useState } from "react";

export default function Fetch() {

    const [arrayNews, setNews] = useState([]);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.values()];
        let query = data[0];
        getFetchData(query).then((data) => {
            setNews(data.response.results);
        })
        event.target.reset();
    };

    const getFetchData = (value) => {
        return fetch(`https://content.guardianapis.com/search?q=${value}&api-key=3ae4a796-1d49-4d04-8974-e3962e2fb188`)
        .then ((response) => {
            return response.json();  
        })
    };    

    return (
        <>
            <div className="mainContiner">
                <h1>The Guardian</h1>
                <form
                    onSubmit={onSubmit}
                    className="userForm"
                >
                    <input placeholder="Введите ключевое слово" type="text" name="searchQuery" className="input" />
                    <button className="inputButton" type="submit">Искать новости</button>
                </form>
                <div className="list">
                    {arrayNews.map((item) => {   
                        return <p className="listItems" key={item.id}><a href={item.webUrl}>{item.webTitle}</a></p>
                        })}
                </div>
            </div>
        </>
    )
}