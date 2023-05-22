// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [

    {
        id: 7,
        title: 'Imitation Learning as State Matching via Differentiable Physics',
        category: 'AI Research',
        img: require('@/assets/images/project/ild.gif'),
        link:'https://arxiv.org/abs/2206.04873',
        authors: '<strong>Siwei Chen</strong>, <a href="https://yusufma03.github.io/">Xiao Ma</a>, <a href="https://zhongwen.one/">Zhongwen Xu</a>',
        conference: 'Computer Vision and Pattern Recognition (CVPR), 2023',
        description: 'We present Imitation Learning via Differentiable Physics (ILD), which casts the imitation learning as a state-matching task through differentiable physics-based Chamfer distance loss. ILD significantly improves the sample efficiency and generalization of imitation learning algorithms with only one expert demonstration.',
        others: '<a href="https://arxiv.org/abs/2206.04873">pdf</a>' +
            ' / <a href="https://github.com/sail-sg/ILD">code</a>'
    },

    {
        id: 6,
        title: 'DaxBench: Benchmarking Deformable Object Manipulation with Differentiable Physics',
        category: 'Scientific Publication',
        img: require('@/assets/images/project/daxbench.gif'),
        link: 'https://arxiv.org/pdf/2210.13066.pdf',
        authors: '<strong>Siwei Chen*</strong>,Yiqing Xu*, Cunjun Yu*, Linfeng Li, <a href="https://yusufma03.github.io/">Xiao Ma</a>,' +
            ' <a href="https://zhongwen.one/">Zhongwen Xu</a>, <a href="https://www.comp.nus.edu.sg/~dyhsu/">David Hsu</a> (*Co-first authors)',
        conference: 'International Conference on Learning Representations (ICLR), 2023 <font color="red">(Oral)</font>',
        description: 'This paper presents DaXBench, a comprehensive benchmark for deformable object manipulation, including planning, imitation learning, and reinforcement learning, based on a scalable and differentiable physics simulator coded in JAX. ',
        others: '<a href="https://daxbench.github.io/">project page </a>' +
            ' / <a href="https://arxiv.org/pdf/2210.13066.pdf">pdf </a>' +
            '/ <a href="https://github.com/AdaCompNUS/DaXBench">code </a>'
    },
    {
        id: 5,
        title: 'DiffMimic: Efficient Motion Mimicking with Differentiable Physics',
        category: 'Artificial Intelligence',
        img: require('@/assets/images/project/diffmimic.png'),
        link: 'https://diffmimic.github.io/',
        authors: '<a href="https://jiawei-ren.github.io/">Jiawei Ren*</a>, <a href="http://cjyu.me/">Cunjun Yu*</a>, <strong>Siwei Chen</strong>, <a href="https://yusufma03.github.io/">Xiao Ma</a>, <a href="https://scholar.google.com/citations?user=lSDISOcAAAAJ&amp;hl=zh-CN">Liang Pan</a>, <a href="https://liuziwei7.github.io/">Ziwei Liu</a> (*equal contributions)',
        conference: 'International Conference on Learning Representations (ICLR), 2023',
        description: 'DiffMimic scales motion imitation for simulated characters with differentiable physics. Training controllers on large-scale motion database is more accessible with DiffMimic.',
        others: '<a href="https://diffmimic.github.io/">project page</a>' +
            ' / <a href="https://openreview.net/forum?id=06mk-epSwZ">pdf</a>' +
            ' / <a href="https://github.com/jiawei-ren/diffmimic">code</a>' +
            ' / <a href="https://diffmimic-demo-main-g7h0i8.streamlit.app/">live demo</a>' +
            ' / <a href="data/ren2023diff/ren2023diff.bib">bibtex</a>'
    },


    {
        id: 3,
        title: 'Ab initio particle-based object manipulation',
        category: 'Web Application',
        img: require('@/assets/images/project/prompt.png'),
        link: 'https://adacomp.comp.nus.edu.sg/particle-based-robot-manipulation/',
        authors: '<strong>Siwei Chen</strong>, <a href="https://yusufma03.github.io/">Xiao Ma</a>, Yunfan Lu, <a href="https://www.comp.nus.edu.sg/~dyhsu/">David Hsu</a>',
        conference: 'Robotics: Science and Systems (RSS), 2021  ',
        description: 'This paper introduces PROMPT, a framework for particle-based object manipulation. PROMPT performs high-quality online point cloud reconstruction from multi-view images captured by an eye-in-hand camera. It achieves high performance in object grasping, pushing, and placing.',
        others: '<a href="https://adacomp.comp.nus.edu.sg/2021/06/26/particle-based-robot-manipulation/">project page</a>' +
            ' / <a href="https://arxiv.org/abs/2107.08865">pdf</a>' +
            ' / <a href="https://github.com/AdaCompNUS/Prompt">code</a>'
    },
    {
        id: 4,
        title: 'Contrastive Variational Reinforcement Learning for Complex Observations',
        category: 'Research Paper',
        img: require('@/assets/images/project/walker.gif'),
        link: 'https://arxiv.org/abs/2008.02430',
        authors: '<a href="https://yusufma03.github.io/">Xiao Ma</a>, <strong>Siwei Chen</strong>, ' +
            '<a href="https://www.comp.nus.edu.sg/~dyhsu/">David Hsu</a>, <a href="https://www.comp.nus.edu.sg/~leews/">Wee Sun Lee</a>',
        conference: '4th Conference on Robot Learning (CoRL), 2020',
        description: 'This paper introduces CVRL, a contrastive model-based reinforcement learning approach for complex observations. Differing from standard generative models, CVRL employs a contrastive latent world model, significantly enhancing robustness against complex observations.',
        others: '<a href="https://sites.google.com/view/cvrl/">project page</a> / ' +
            '<a href="https://arxiv.org/abs/2008.02430">pdf</a> / ' +
            '<a href="https://github.com/Yusufma03/CVRL">code</a> / ' +
            '<a href="https://www.youtube.com/watch?v=koXGdHR6Nd4">talk</a>'
    },
    // {
    //     id: 2,
    //     title: 'Improving Layer-wise Adaptive Rate Methods using Trust Ratio Clipping',
    //     category: 'Web Application',
    //     img: require('@/assets/images/web-project-2.jpg'),
    //     link:'',
    //     authors: 'xxx, xxx, xxx',
    //     conference: 'XXX 2021',
    //     description: '',
    //     others: 'project page / pdf / code / live demo / bibtex'
    // },
    {
        id: 1,
        title: 'DinerDash Gym: A Benchmark for Policy Learning in High-Dimensional Action Space',
        category: 'Web Application',
        img: require('@/assets/images/project/dinerdash.png'),
        link: '',
        authors: '<strong>Siwei Chen</strong>, <a href="https://yusufma03.github.io/">Xiao Ma</a>, <a href="https://www.comp.nus.edu.sg/~dyhsu/">David Hsu</a>',
        conference: 'Robotics: Science and Systems (RSS) Workshop, 2020',
        description: 'We propose a lightweight benchmark task called Diner Dash to evaluate performance' +
            ' in a complex task with a high-dimensional action space. Unlike traditional Atari games,' +
            ' Diner Dash has a hierarchical task structure and a larger action space of size 57. ' +
            'We also introduce Decomposed Policy Graph Modelling (DPGM), which combines graph modelling' +
            ' and deep learning to embed explicit domain knowledge and outperforms the baseline significantly.',
        others: '<a href="https://arxiv.org/abs/2007.06207">pdf</a> ' +
            '/ <a href="https://github.com/AdaCompNUS/diner-dash-simulator">code</a>'
    },
];

export default projects;
