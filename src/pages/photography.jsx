import Layout from "../components/layout";
import cn from "classnames";
import Photo from "../components/photo";
import { getPhotoGallery } from "../lib/photo";

export async function getStaticProps() {
  const gallery = await getPhotoGallery();
  return { props: { gallery } };
}

export default function Home({ gallery }) {
  return (
    <Layout title="Photography">
      <div className={cn(["flex", "flex-col", "gap-16", "md:gap-32"])}>
        {gallery.map(({ title, subtitle, details, h, w, src }) => (
          <Photo
            title={title}
            subtitle={subtitle}
            details={details}
            h={h}
            w={w}
            src={src}
            key={src}
          />
        ))}
      </div>
    </Layout>
  );
}
