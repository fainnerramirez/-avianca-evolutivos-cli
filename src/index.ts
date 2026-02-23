#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
  .name('evolutivos')
  .description('CLI para descargar templates para desarrollos de target')
  .version('1.0.0');

// Comando para crear un proyecto vacío en target
program
  .command('create [projectName]')
  .description('Crea un proyecto vacío con la estructura básica')
  .action((projectName: string) => {
    const { CreateEmptyProject } = require('./commands/create-project-empty');
    CreateEmptyProject(projectName);
  });

program.parse(process.argv);