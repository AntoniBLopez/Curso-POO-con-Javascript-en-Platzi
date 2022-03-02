class LearningPath {
    constructor({
      id,
      logo,
      name,
      teachers = [],
      blogposts = [],
      glosary = [],
      category,
      description,
      levels = [],
    }) {
      this.id = id;
      this.logo = logo;
      this.name = name;
      this.teachers = teachers;
      this.blogposts = blogposts;
      this.glosary = glosary;
      this.category = category;
      this.description = description;
      this.levels = levels;
    }
  
    addCourse(level, nameCourse) {
      if (!this.levels[level]) {
        this.levels[level] = [];
      }
      this.levels[level].push(nameCourse);
    }
  
    addTeacher(teacher){
      this.teachers.push(teacher)
    }
  
    addBlog(blog){
      this.blogposts.push(blog)
    }
  
    addConcept(concept){
      this.glosary.push(concept)
    }
}

const toni = new LearningPath({
    id: 'ToniB.Lopeezzz',
    logo: 'Touni',
    name: 'Toni Bassols Lopez',
})