pipeline {
  agent any
  stages {
    
    stage('Instalar dependencias') {
      steps {
        sh 'cd apip1 && npm i'
      }
    }
    stage('Run tests') {
      steps {
        sh 'cd apip1 && npm run test'   
      }
    }
    stage('Deploy') {
      steps {  
        sh 'cd apip1 && node index.js'
      }
    }
  }
}