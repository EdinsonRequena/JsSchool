const isObject = subject => typeof subject == 'object'
const isArrayFunc = subject => Array.isArray(subject)

const deepCopy = subject => {
    let copySubject

    const subjectIsObject = isObject(subject)
    const subjectIsArray = isArrayFunc(subject)

    if (subjectIsArray) copySubject = []
    else if (subjectIsObject) copySubject = {}
    else subject

    for (let key in subject) {
        const keyIsObject = isObject(subject[key])
        if (keyIsObject) copySubject[key] = deepCopy(subject[key])
        else subjectIsArray ? copySubject.push(subject[key]) : copySubject[key] = subject[key]
    }

    return copySubject
}

export default deepCopy

