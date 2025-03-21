function editElement(element, match, replacer) {
    let content = element.textContent;
    let updateContent = content.split(match).join(replacer);

    element.textContent = updateContent;

}