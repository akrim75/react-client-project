export function NotFound()
{
    console.log("NotFound");
    return (<div><h1>404 Not found</h1>
    <p>ops! We couldn't find the thing you're asking for. Sorry about that!</p>
    <p>Maybe try one of these instead?</p>
    <ul><li><a href="/">Find a movie</a> </li>
    <li><a href="/login">Log in</a> </li>
    <li><a href="/account">Register</a> </li></ul></div>);
}