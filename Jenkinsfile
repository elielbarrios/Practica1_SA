pipeline {
  agent any
  stages {
    stage('Install Dependences') {
      steps {
        sh 'cd Webapp && npm i -D'
      }
    }
    stage('Run unit tests mocha/chai') {
      steps {
        sh 'cd Webapp &&  npm test'
      }
    } 
    stage('Status git') {
      steps {
        sh 'git status'
      }
    } 
    stage('Deploy ansible frontend') {
      steps {
        ansiblePlaybook credentialsId: 'ansiblejenkins', disableHostKeyChecking: true, installation: 'ansible2', inventory: 'inventario.inv', playbook: 'front.yml'
      }
    }
    stage('Deploy ansible backend') {
      steps {
        ansiblePlaybook credentialsId: 'ansiblejenkins', disableHostKeyChecking: true, installation: 'ansible2', inventory: 'inventario.inv', playbook: 'back.yml'
      }
    }
  
  }

  post {
        success {
            echo 'Install, Test, Build and Deploy'
        }
        failure {
            echo 'Algo fallo'
        }
    }
}