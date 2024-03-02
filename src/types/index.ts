// 型一覧　将来的にindex.tsから個別のファイルに切り出す可能性あり

// microCMSのブログ記事の型　microCMSのAPIスキーマを参照
export type CMSBlogs = {
  contents: CMSBlog[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type CMSBlog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
  };
};
