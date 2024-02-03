function ProjectCreation(input) {
    let [name, projectNumbers] = input
    console.log(`The architect ${name} will need ${projectNumbers * 3} hours to complete ${projectNumbers} project/s.`);
}
ProjectCreation(["name", "projectNumbers"])
