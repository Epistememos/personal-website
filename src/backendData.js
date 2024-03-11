const backendData = [
    {
      section: 'Projects',
      id: 'projects',
      link: '/projects',
      categories: [
        {
          title: 'NeuralCar',
          src: '/assets/img-neuralcar.jpg'
        },
        {
          title: 'TaskMaster',
          src: '/assets/img-taskmaster.jpg',
          path: 'https://github.com/Epistememos/TaskMaster'
        },
        {
          title: 'Projecto (March 2024)', 
          src: '/assets/img-projecto.jpg'
        }
      ]
    },
    {
      section: 'Involvements',
      id: 'involvements',
      link: '/involvements',
      categories: [
        {
          title: 'Director of Outreach - MPMA',
          src: '/assets/img-mpma.jpg',
          path: 'https://www.linkedin.com/company/mpma-mcgill/'
        },
        {
          title: 'Junior Consultant - ConnectUs',
          time: '10/2023-Present',
          src: '/assets/img-connectus.jpg',
          path: 'https://www.instagram.com/mcgill.cu/?hl=en'
          
        },
        {
          title: 'VP External - MSFC', 
          time: '10/2023-Present',
          src: '/assets/img-msfc.jpg',
          path: 'https://www.instagram.com/mcgillflyingclub/?hl=en'
        },
        {
          title: 'Member - Boxing Club', 
          time: '10/2023-Present',
          src: '/assets/img-boxing.jpg',
          path: 'https://mcgillstudentboxingclub.ca/'
        }
      ]
    },
    {
      section: 'Blog',
      id: 'blog',
      link: '/blog',
      categories: [
        {
          title: 'Free Will (Coming Soon)',
          src: '/assets/img-freewill.jpg',
          path: 'article/free-will',
          article: '/public/articles/free-will.txt' 
        },
        {
          title: 'Misunderstood Nietzsche (Soon)',
          src: ''
        },
        {
          title: 'Option Trading Simplified (Soon)', 
          src: ''
        }
      ]
    }
  ];

export default backendData;