<template>
    <div class="container">
        <div class="project">
            <div class="row">
                <div class="col-md-6">
                    <h2>School Management System</h2>
                    <p><strong>Technologies Used</strong>: Laravel, jQuery, Bootstrap</p>

                    <h3>Project Overview</h3>
                    <p>
                        Developed a comprehensive <strong>School Management System</strong> for a local school to
                        streamline
                        administrative tasks, student records, and academic management. The system includes modules for
                        staff
                        and student registration, academic details, fee management, admissions, expense tracking, and
                        certificate generation. Built with <strong>Laravel</strong> for the backend and
                        <strong>jQuery</strong>
                        and <strong>Bootstrap</strong> for the frontend, the platform ensures efficiency and
                        transparency in
                        school operations.
                    </p>
                </div>
                <div class="col-md-6">

                    <video src="/videos/school-management-system.mp4" controls width="100%"> </video>
 
                        <GalleryImages :images="images" />
                    


                    <!-- <div style="position: relative; padding-bottom: 56.22254758418741%; height: 0;"><iframe src="https://www.loom.com/embed/97d28b76f3ae47c598a13cabf9064999?sid=16ae653f-cb1b-4cdf-b478-41879ff918d6" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div> -->
                </div>
            </div>

            <h3>Key Features and Modules</h3>
            <ol>
                <li>
                    <strong>Staff Registration</strong>:
                    <ul>
                        <li>Add, update, and delete staff records.</li>
                    </ul>
                </li>
                <li>
                    <strong>Student Registration</strong>:
                    <ul>
                        <li>Add and update student records.</li>
                    </ul>
                </li>
                <li>
                    <strong>Academic Details</strong>:
                    <ul>
                        <li>Manage class details, sections, and subjects.</li>
                        <li>View complete class details, including student attendance.</li>

                    </ul>
                </li>
                <li>
                    <strong>Fee Management</strong>:
                    <ul>
                        <li>Manage academic fees, admission fees, and examination fees.</li>
                        <li>With Search filters admission number, class, section, fee status, and fee month.</li>
                    </ul>
                </li>
                <li>
                    <strong>Admission Management</strong>:
                    <ul>
                        <li>Add, update, and delete admission forms.</li>
                    </ul>
                </li>
                <li>
                    <strong>Expense Management</strong>:
                    <ul>
                        <li>Add, update, and delete expenses.</li>
                        <li>View total expenses with a search-by-date filter.</li>
                    </ul>
                </li>
                <li>
                    <strong>Certificate Management</strong>:
                    <ul>
                        <li>Generate and manage certificates:</li>
                        <ul>
                            <li><strong>Hope Certificate</strong></li>
                            <li><strong>Character Certificate</strong></li>
                        </ul>
                    </ul>
                </li>
            </ol>

            <h3>Technologies Used</h3>
            <ul>
                <li><strong>Frontend</strong>: Bootstrap, jQuery</li>
                <li><strong>Backend</strong>: Laravel</li>
                <li><strong>Database</strong>: MySQL</li>
                <li><strong>Deployment</strong>: Shared, CPanel</li>
                <li><strong>Version Control</strong>: Git</li>
            </ul>

            <h3>Impact</h3>
            <ul>
                <li>Streamlined school operations, reducing administrative workload by 40%.</li>
                <li>Improved record-keeping and transparency in fee and expense management.</li>
                <li>Enhanced efficiency in managing student and staff records.</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();

const images = ref([
    {
        src: config.app.baseURL + 'images/project.png'
    },
    {
        src: config.app.baseURL + 'images/school-management.png'
    },
    {
        src: config.app.baseURL + 'images/team-work.jpg'
    }
])



</script>

<style lang="scss"></style>