export const variantMenu = {
  initial: {
    x: '100%',
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
  animate: {
    x: '0',
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
  exit: {
    x: '100%',
    transition: {
      ease: 'easeInOut',
      delay: 0.2,
      duration: 0.3,
    },
  },
}

export const ContainerVariants = {
  initial: {
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 0.3,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      ease: 'linear',
      delay: 0.3,
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'linear',
      duration: 0.1,
    },
  },
}
