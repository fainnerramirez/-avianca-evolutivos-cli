
const fs = require('fs');
const path = require('path');
const getContentEmptyProject = require('../utils/project-empty-content');

function CreateFile(filePath: string, content: string) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Archivo creado exitosamente en: ${filePath}`);
}

function CreateEmptyProject(projectName: string = 'target-FBXXX') {

    //creando la carpeta del proyecto
    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
        console.error('El directorio ya existe. Por favor, elige otro nombre o elimina el directorio existente.');
        process.exit(1);
    }

    fs.mkdirSync(projectPath);
    console.log('Proyecto vacío creado exitosamente en:', projectPath);

    //creando archivo dentro de la carpeta
    const filePath = path.join(projectPath, 'index.html');
    if (fs.existsSync(filePath)) {
        console.error('El archivo index.html ya existe. Por favor, elige otro nombre o elimina el archivo existente.');
        process.exit(1);
    }

    const content = getContentEmptyProject(projectName);
    CreateFile(filePath, content);
}

module.exports = CreateEmptyProject;