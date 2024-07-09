# frozen_string_literal: true

class Api::Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
end