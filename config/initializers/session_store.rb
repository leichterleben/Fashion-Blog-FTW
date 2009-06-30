# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_somewear_session',
  :secret      => 'c060779ca16f55a98b070fd2344135930cdc7d04fc22d6a36d1ad107b8eb8f09fdc0b4630c00f6b6acae8508e9ce7297c8ed5273c9677728b0a3fbacfab834ec'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
