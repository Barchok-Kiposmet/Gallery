pipeline {
    agent any
    environment {

        EMAIL_BODY = 

        """
            <p>EXECUTED: Job <b>\'${env.JOB_NAME}:${env.BUILD_NUMBER})\'</b></p>
            <p>
            View console output at 
            "<a href="${env.BUILD_URL}">${env.JOB_NAME}:${env.BUILD_NUMBER}</a>"
            </p> 
            <p><i>(Build log is attached.)</i></p>
        """

        EMAIL_SUBJECT_SUCCESS = "Status: 'SUCCESS' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_SUBJECT_FAILURE = "Status: 'FAILURE' -Job \'${env.JOB_NAME}:${env.BUILD_NUMBER}\'" 

        EMAIL_RECEPIENT = 'patrick.barchok@student.moringaschool.com'

    }
    
    tools {nodejs "node"}
    
    
    stages {
        stage('Start') {
            steps {
                echo 'Build is starting'
            }
        }
        stage('Clone github repository') {
            steps {
                git url: 'https://github.com/Barchok-Kiposmet/Gallery.git', branch: 'master'
            }
        }
        stage('Install dependencies') {
            steps {
                sh '''
                   npm install
                   '''
            }
        }
        stage('Run test') {
            steps {
                sh '''
                   npm test
                   '''
            }
        }
        stage('Deploy to Render') {
            steps {
                sh '''
                   curl -X POST https://api.render.com/deploy/srv-cg1klu82qv25u2hj22vg?key=p36lg1hkm8M
                   '''
            }
        }
        stage('End') {
            steps {
                echo 'Build has run successfully'
            }
        }
    }
}