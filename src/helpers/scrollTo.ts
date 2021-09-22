const scrollTo = (id: string) => {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }
}

export default scrollTo;
