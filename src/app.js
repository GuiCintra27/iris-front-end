import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global/globalStyle";
import { UserProvider } from "./contexts/UserContext";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Donate from "./pages/donate";
import AboutUs from "./pages/about-us";
import Volunteers from "./pages/volunteers";
import VolunteerForm from "./pages/volunteers/form";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
import { TempProvider } from "./contexts/TempContext";
import PostPage from "./pages/post-page";

export default function App() {
    /* Baixar a fonte para o próprio projeto */
    return (
        <>
            <GlobalStyle />
            <UserProvider>
                <TempProvider>
                    <BrowserRouter>
                        <QueryParamProvider adapter={ReactRouter6Adapter}>
                            <Routes>
                                <Route path="/" element={<Home page='/' />} />
                                <Route path="/sign-in" element={<SignIn/>} />
                                <Route path="/sign-up" element={<SignUp/>} />
                                <Route path="/blog" element={<Blog page='/blog' />} />
                                <Route path="/blog/post/:postId" element={<PostPage page='/blog/post' />} />
                                <Route path="/donate" element={<Donate page='/donate' />} />
                                <Route path="/about-us" element={<AboutUs page='/about-us' />} />
                                <Route path="/volunteers" element={<Volunteers page='/volunteers' />} />
                                <Route path="/volunteers/form" element={<VolunteerForm page='/volunteers' />} />
                            </Routes>
                        </QueryParamProvider>
                    </BrowserRouter>
                </TempProvider>
            </UserProvider>
        </>
    );
}
