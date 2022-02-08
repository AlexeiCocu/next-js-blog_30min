import Head from 'next/head'
import styles from '../styles/Home.module.css';
import {InferGetStaticPropsType} from "next";
import Post from '../components/post/Post';
import Grid from "../components/grid/Grid";


const title: string = "Next.js + Typescript"

export default function Home({posts}:InferGetStaticPropsType<typeof getStaticProps>):JSX.Element {
  return (
      <>
          <div className={styles.container}>
              <Head>
                  <title>Create Next App</title>
              </Head>

              <main className={styles.main}>
                  <h1 className={styles.title}>
                      {title}
                  </h1>
              </main>
              <Grid>
                  {posts.map((post) => (
                      <Post>
                          <h5>User Id: {post.userId}</h5>
                          <h3>{post.title}</h3>
                          <p>{post.body}</p>
                      </Post>
                  ))}
              </Grid>
          </div>


      </>

  )
}


export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: Post[] = await res.json();

    return {
        props: {
            posts,
        }
    }
}

