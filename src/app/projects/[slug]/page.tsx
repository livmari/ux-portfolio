const Project = ({ params }: { params: { slug: string } }) => {
  return <main>Project: {params.slug}</main>
}

export default Project
