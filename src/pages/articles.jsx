import Head from "next/head";
import ArticlesHero from "@/components/articles/ArticlesHero";
import ArticlesFeatured from "@/components/articles/ArticlesFeatured";
import ArticlesGrid from "@/components/articles/ArticlesGrid";
import ArticlesCategories from "@/components/articles/ArticlesCategories";
import ArticlesAuthors from "@/components/articles/ArticlesAuthors";
import ArticlesNewsletter from "@/components/articles/ArticlesNewsletter";
import ArticlesCTA from "@/components/articles/ArticlesCTA";

export default function ArticlesPage() {
  return (
    <>
      <Head>
        <title>Thanks Digital Articles | Strategies &amp; insights from the team</title>
        <meta
          name="description"
          content="Design thinking, creative process, and business strategy written by the senior designers behind Thanks Digital's client work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="selection:bg-white selection:text-black">
        <ArticlesHero />
        <ArticlesFeatured />
        <ArticlesGrid />
        <ArticlesCategories />
        <ArticlesAuthors />
        <ArticlesNewsletter />
        <ArticlesCTA />
      </div>
    </>
  );
}
