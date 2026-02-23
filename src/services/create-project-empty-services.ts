const fs = require('fs');
const path = require('path');
const getContentEmptyProject = require('../utils/project-empty-content');
const chalk = require('chalk').default;
const ora = require('ora').default;

function CreateFile(filePath: string, content: string) {
    fs.writeFileSync(filePath, content, 'utf8');
}

async function CreateEmptyProject(projectName: string = 'target-FBXXX') {
    const spinner = ora('Creando proyecto vacío...').start();
    await new Promise(resolve => setTimeout(resolve, 2000)); 
    //creando la carpeta del proyecto
    const projectPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
        spinner.fail();
        console.error(chalk.red('Error: La carpeta del proyecto ya existe. Por favor, elige otro nombre o elimina la carpeta existente.'));
        process.exit(1);
    }

    fs.mkdirSync(projectPath);
    spinner.succeed(chalk.green('Proyecto vacío creado exitosamente en: ' + projectPath));

    //creando archivo dentro de la carpeta
    const filePath = path.join(projectPath, 'index.html');
    if (fs.existsSync(filePath)) {
        console.error(chalk.red('Error: El archivo index.html ya existe. Por favor, elige otro nombre o elimina el archivo existente.'));
        process.exit(1);
    }

    const content = getContentEmptyProject(projectName);
    CreateFile(filePath, content);
}

module.exports = CreateEmptyProject;