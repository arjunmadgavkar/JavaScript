const properties = [
    "namePrefix",
    "givenName",
    "middleName",
    "surname",
    "nameSuffix",
    "altName"
];
    
const isProperty = Object.assign(
    ...properties.map(field => ({ [field]: true }))
);

console.log(JSON.stringify(isProperty));

