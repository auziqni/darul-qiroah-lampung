interface DataOurMission {
  title: string;
  content: string;
  imgsrc: string;
  variant: string;
}

interface Post {
  id: number;
  title: string;
  description?: string;
  image: string;
  date: string;
  author: string;
  tags?: string[];
  published: boolean;
  path: string;
  body: string;
  pathAsParams: string;
  slug: string;
}
