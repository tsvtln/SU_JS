function the_guild(input) {
    const n = Number(input.shift());
    const heroes = {};

    for (let i = 0; i < n; i++) {
        const [name, position, skills_strings] = input[i].split(' ');
        const skills = skills_strings.split(',');
        heroes[name] = {
            position,
            skills: new Set(skills)
        };
    }

    input.splice(0, n);

    for (let command of input) {
        if (command === "End") break;
        const [action, name, arg2, arg3] = command.split(' / ').map(x => x.trim());
        if (!heroes[name]) continue;

        switch (action) {
            case 'Perform': {
                let [requiredRole, skill] = [arg2, arg3];
                if (heroes[name].position === requiredRole && heroes[name].skills.has(skill)) {
                    console.log(`${name} has successfully performed the skill: ${skill}!`);
                } else {
                    console.log(`${name} cannot perform the skill: ${skill}.`);
                }
                break;
            }
            case 'Learn Skill': {
                let newSkill = arg2;
                if (heroes[name].skills.has(newSkill)) {
                    console.log(`${name} already knows the skill: ${newSkill}.`);
                } else {
                    heroes[name].skills.add(newSkill);
                    console.log(`${name} has learned a new skill: ${newSkill}.`);
                }
                break;
            }
            case 'Reassign': {
                let newRole = arg2;
                heroes[name].position = newRole; // 🛠️ FIXED
                console.log(`${name} has been reassigned to: ${newRole}`); // 🛠️ FIXED
                break;
            }
        }
    }

    for (let [name, data] of Object.entries(heroes)) {
        const sortedSkills = Array.from(data.skills).sort((a, b) => a.localeCompare(b));
        console.log(`Guild Member: ${name}, Role: ${data.position}, Skills: ${sortedSkills.join(', ')}`);
    }
}


the_guild([
    "3",
    "Arthur warrior swordsmanship,shield",
    "Merlin mage fireball,teleport",
    "Gwen healer healing,alchemy",
    "Perform / Arthur / warrior / swordsmanship",
    "Perform / Merlin / warrior / fireball",
    "Learn Skill / Gwen / purification",
    "Perform / Gwen / healer / purification",
    "Reassign / Merlin / healer",
    "Perform / Merlin / healer / teleport",
    "End"
  ]);