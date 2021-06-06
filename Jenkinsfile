pipeline {
  agent any
  stages {
    stage('Instalar dependencias') {
      steps {
        sh 'npm i'
      }
    }
    stage('Build') {
      steps {
        sh 'git checkout origin/master'
      }
    }
    stage('Run tests') {
      steps {
        sh 'ng test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'git merge origin/develop'
      }
    }
  }
}