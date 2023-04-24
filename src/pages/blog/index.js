import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import usePosts from "../../hooks/api/usePosts";
import Post from "./post";

export default function Blog({ page }) {
    const { posts } = usePosts();
    
    return (
        <>
            <Header page={page} />

            {posts && posts.map((item, index) => (
                <Post
                    key={index}
                    author={item.admins.name}
                    authorImg={item.admins.photo}
                    text={item.text}
                    postImg={item.image}
                />
            ))}

            <Footer />
        </>
    );
}
