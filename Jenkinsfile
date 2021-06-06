pipeline {
  agent any
  stages {
    
    stage('Instalar dependencias') {
      steps {
        sh 'cd appweb && npm i'
      }
    }
    stage('Run tests') {
      steps {
        sh 'cd appweb && ng test'   
      }
    }
    stage('Deploy') {
      steps {  
        sh 'git merge origin/develop'
      }
    }
  }
}