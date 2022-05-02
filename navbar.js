// link:-https://masai-mock-api.herokuapp.com/news?q=search/photos/?query=${value}&per_page=2&clint_id=YOUR_ACCESS_KEY
let navbar = () =>{
    return `<div><a href="news.html"><h1>News App</h1></a></div>
        <div>
        <input id="search_input" type="text" placeholder="Search News"/>
        </div>`;
};

export { navbar };