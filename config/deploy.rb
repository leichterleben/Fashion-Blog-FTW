set :application, "somewear.it"
set :scm ,:git
set :repository,  "git://github.com/leichterleben/Fashion-Blog-FTW.git"
set :git_enable_submodules,1
set :local_repository , "."
set :branch, "master"

set :deploy_to, "/home/www/somewear.it"



# If you aren't deploying to /u/apps/#{application} on the target
# servers (which is the default), you can specify the actual location
# via the :deploy_to variable:
# set :deploy_to, "/var/www/#{application}"

# If you aren't using Subversion to manage your source code, specify
# your SCM below:
# set :scm, :subversion
single_target= "192.168.23.67"

role :app, single_target
role :web, single_target
role :db,  single_target, :primary => true

namespace :deploy do
  task :restart do
    run "touch #{current_release}/tmp/restart.txt"
  end
end