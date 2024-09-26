import React from 'react';
import { Loader } from '../Loader';
import { User } from '../../types/User';
import { Todo } from '../../types/Todo';

type Props = {
  activeUser: User | null;
  activeTodo: Todo | null;
  isModalLoading: boolean;
  closeModal: () => void;
};

export const TodoModal: React.FC<Props> = ({
  activeUser,
  isModalLoading,
  activeTodo,
  closeModal,
}) => {
  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {isModalLoading && <Loader />}

      {!isModalLoading && (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              Todo #{activeTodo?.id}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={() => closeModal()}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {activeTodo?.title}
            </p>

            <p className="block" data-cy="modal-user">
              {/* <strong className="has-text-success">Done</strong> */}
              <strong className="has-text-danger">Planned</strong>

              {' by '}

              <a href={`mailto:${activeUser?.email}`}>{activeUser?.name}</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
