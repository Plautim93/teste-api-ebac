pipeline {
    agent any

	stages {
        stage('Clonar repositório'){
            steps{
                git branch:'main', url:'https://github.com/Plautim93/teste-api-ebac'

            }
        }
            stage('Instalar dependencias'){
                steps{
                bat 'npm install'
         }

     }
        stage('Subir servidor'){
            steps{
            bat 'start/b npm start'
        }
    }
        stage('Realizar os testes'){
            steps {
            bat 'npm run cy:run'
            }
         }

    }

};