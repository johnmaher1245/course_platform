<?php require_once('components/header.php') ?>

<style>
    .wsj-green {
            background-color: #00eec2;
            color: black;
            box-shadow: 0 0 7px #09ffd1!important;
        }
        .wsj-white {
            color: #212529;
            background-color: #f4f5f7;
            box-shadow: 0 0 7px #fff!important;
        }
.wrapper {
    position: relative;
    top: 0;
    height: 100%; 
}

.perfect-scrollbar-on .sidebar, .perfect-scrollbar-on .main-panel {
    height: 80%;
    max-height: 100%;
}

html {
  overflow-y: hidden !important;
  height: 100vh !important;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

</style>

<div class="main-panel">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-absolute navbar-transparent">
        <div class="container-fluid">
            <div class="navbar-wrapper">
                <div class="navbar-toggle d-inline">
                    <button type="button" class="navbar-toggler">
                        <span class="navbar-toggler-bar bar1"></span>
                        <span class="navbar-toggler-bar bar2"></span>
                        <span class="navbar-toggler-bar bar3"></span>
                    </button>
                </div>
                <a class="navbar-brand" href="javascript:void(0)">THE STEAMROOM</a>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-bar navbar-kebab"></span>
                <span class="navbar-toggler-bar navbar-kebab"></span>
                <span class="navbar-toggler-bar navbar-kebab"></span>
            </button>
            <div class="collapse navbar-collapse" id="navigation">
                <ul class="navbar-nav ml-auto">
                    <li class="search-bar input-group">
                        <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i
                                class="tim-icons icon-video-66"></i>
                            <span class="d-lg-none d-md-block">Search</span>
                        </button>
                    </li>
                    <li class="dropdown nav-item">
                        <a href="javascript:void(0)" class="dropdown-toggle nav-link" data-toggle="dropdown">
                            <div class="notification d-none d-lg-block d-xl-block"></div>
                            <i class="tim-icons icon-sound-wave"></i>
                            <p class="d-lg-none">
                                Notifications
                            </p>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right dropdown-navbar">
                            <li class="nav-link">
                                <a href="#" class="nav-item dropdown-item">Mike John responded to your email</a>
                            </li>
                            <li class="nav-link">
                                <a href="javascript:void(0)" class="nav-item dropdown-item">You have 5 more tasks</a>
                            </li>
                            <li class="nav-link">
                                <a href="javascript:void(0)" class="nav-item dropdown-item">Your friend Michael is in
                                    town</a>
                            </li>
                            <li class="nav-link">
                                <a href="javascript:void(0)" class="nav-item dropdown-item">Another notification</a>
                            </li>
                            <li class="nav-link">
                                <a href="javascript:void(0)" class="nav-item dropdown-item">Another one</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown nav-item">
                        <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                            <div class="photo">
                                <img src="../assets/img/img.jpg" alt="Profile Photo">
                            </div>
                            <b class="caret d-none d-lg-block d-xl-block"></b>
                            <p class="d-lg-none">
                                Log out
                            </p>
                        </a>
                        <ul class="dropdown-menu dropdown-navbar">
                            <li class="nav-link">
                                <a href="javascript:void(0)" class="nav-item dropdown-item">Profile</a>
                            </li>
                            <li class="nav-link">
                                <a href="javascript:void(0)" class="nav-item dropdown-item">Settings</a>
                            </li>
                            <li class="dropdown-divider"></li>
                            <li class="nav-link">
                                <a href="javascript:void(0)" class="nav-item dropdown-item">Log out</a>
                            </li>
                        </ul>
                    </li>
                    <li class="separator d-lg-none"></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- search modal -->
    <div class="modal modal-search fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModal"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="tim-icons icon-simple-remove"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- End Navbar -->
    <div class="content">

        <div class="row row-eq-height">
            <div class="col-lg-7">
                <div class="card card-tasks" style="height: auto">
                    <div class="card-header ">
                        <h6 class="title d-inline" style="color: #29b499;">#Lounge</h6>
                        <div class="dropdown">
                            <button type="button" class="btn btn-link dropdown-toggle btn-icon" data-toggle="dropdown">
                                <i class="tim-icons icon-settings-gear-63"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#pablo">Action</a>
                                <a class="dropdown-item" href="#pablo">Another action</a>
                                <a class="dropdown-item" href="#pablo">Something else</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body ">
                        <div class="table-full-width table-responsive" style="max-height: 850px;">
                            <table class="table" style="max-height: 850px;">
                                <tbody>
                                    <tr>
                                        <div class="media">
                                            <img class="mr-3" src="https://aoslabs.xyz/assets/img/logo.png" style="max-width: 40px;">
                                            <div class="media-body">
                                                <h5 class="mt-0">WallStJesus <span class="badge wsj-white">Admin</span></h5>
                                                <pre class="text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. </pre><br>
                                            </div>
                                        </div>

                                    </tr>
                                    <tr>

                                    </tr>

                                    <tr>

                                    </tr>
                                    <tr>

                                    </tr>
                                    <tr>

                                    </tr>
                                    <tr>

                                    </tr>
                                    <tr>

                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="checkbox" value="">
                                                    <span class="form-check-sign">
                                                        <span class="check"></span>
                                                    </span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="title">Arival at export process</p>
                                            <p class="text-muted">Capitol Hill, Seattle, WA 12:34 AM</p>
                                        </td>
                                        <td class="td-actions text-right">
                                            <button type="button" rel="tooltip" title="" class="btn btn-link"
                                                data-original-title="Edit Task">
                                                <i class="tim-icons icon-pencil"></i>
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5">

                <div class="card card-chart">
                    <div class="card-header">
                        <h5 class="card-category">Completed Tasks</h5>
                        <h3 class="card-title"><i class="tim-icons icon-send text-success"></i> 12,100K</h3>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <canvas id="chartLineGreen"></canvas>
                        </div>
                    </div>
                </div>

                <div class="card card-chart" style="display: none;">
                    <div class="card-header">
                        <h5 class="card-category">Completed Tasks</h5>
                        <h3 class="card-title"><i class="tim-icons icon-send text-success"></i> 12,100K</h3>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <canvas id="chartLinePurple"></canvas>
                        </div>
                    </div>
                </div>



            <div class="card ">
                <div class="card-header">
                    <h5 class="card-title">WISEGUY ALERTS</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table tablesorter " id="">
                            <tbody>
                                <tr>
                                    <td>
                                        Doris Greene
                                    </td>
                                    <td>
                                        Malawi
                                    </td>
                                    <td class="text-center">
                                        $63,542
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="row">

        <div class="col-lg-6 col-md-12">

        </div>
    </div>
</div>


<?php require_once('components/footer.php') ?>