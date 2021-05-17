import React, { useState, useEffect } from "react";

export default function Fetch() {

    const [valueArr, setNews] = useState([]);

    const [valueFromUser, setValue] = useState('');

    const [pages, setNumberPages] = useState(1);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.values()];
        let search = data[0];
        setValue(search);
        setNumberPages(1);
        event.target.reset();
    };

    useEffect(() => {
        getFetchData(pages, valueFromUser).then((data) => {
            setNews(data.response.results);
        })
    }, [pages, valueFromUser]);

    function getNextPage() {
        setNumberPages(pages + 1);
    };

    function getPrevPage() {
        setNumberPages(pages - 1);
    };

    const getFetchData = (pages, valueFromUser) => {
        return fetch(`https://content.guardianapis.com/search?page=${pages}&q=${encodeURIComponent(valueFromUser)}&page-size=10&api-key=3ae4a796-1d49-4d04-8974-e3962e2fb188`)
        .then ((response) => {
            return response.json();  
        })
    };
    
    function onHandlerValuePolitics() {
        setValue('Politics')
    };

    function onHandlerValueCovid() {
        setValue('Covid')
    };

    function onHandlerValueRussia() {
        setValue('Russia')
    };

    function onHandlerValueFootball() {
        setValue('Football')
    };

    return (
        <>
            <div className="mainContiner">
                <h1>The Guardian</h1>
                <hr />
                <div>
                    <p className="search">Выберете интересующую тематику:</p>
                    <button className="searchButton" onClick={onHandlerValuePolitics}>Politics</button>
                    <button className="searchButton" onClick={onHandlerValueCovid}>Covid</button>
                    <button className="searchButton" onClick={onHandlerValueRussia}>Russia</button>
                    <button className="searchButton" onClick={onHandlerValueFootball}>Football</button>
                </div>
                <p className="search">Или введите свой запрос:</p>
                <form
                    onSubmit={onSubmit}
                    className="userForm"
                >
                    <input placeholder="Введите ключевое слово" type="text" name="searchQuery" className="input" />
                    <button className="inputButton" type="submit">Искать новости</button>
                </form>
                <div className="list">
                    {valueArr.map((item) => {   
                        return <p className="listItems" key={item.id}><a href={item.webUrl}>{item.webTitle}</a></p>
                        })}
                </div>
                <div className="pages">    
                    <button className="pageButton" onClick={getPrevPage}>предыдущая</button>
                    <p>Страница: {pages}</p>
                    <button className="pageButton" onClick={getNextPage}>следующая</button>             
                </div>
            </div>
        </>
    )
}