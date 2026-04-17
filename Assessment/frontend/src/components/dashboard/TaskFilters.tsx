'use client';

import { TaskFilters as Filters } from '@/types';

interface TaskFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

export const TaskFilters = ({ filters, onFilterChange }: TaskFiltersProps) => {
  return (
    <div className="card p-4">
      <div className="flex flex-wrap gap-4">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Search tasks..."
            className="input"
            value={filters.search || ''}
            onChange={(e) => onFilterChange({ ...filters, search: e.target.value, page: 1 })}
          />
        </div>

        {/* Status Filter */}
        <select
          className="input w-auto"
          value={filters.status || ''}
          onChange={(e) =>
            onFilterChange({
              ...filters,
              status: e.target.value as Filters['status'] || undefined,
              page: 1,
            })
          }
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        {/* Priority Filter */}
        <select
          className="input w-auto"
          value={filters.priority || ''}
          onChange={(e) =>
            onFilterChange({
              ...filters,
              priority: e.target.value as Filters['priority'] || undefined,
              page: 1,
            })
          }
        >
          <option value="">All Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* Sort By */}
        <select
          className="input w-auto"
          value={filters.sortBy || 'createdAt'}
          onChange={(e) =>
            onFilterChange({
              ...filters,
              sortBy: e.target.value as Filters['sortBy'],
            })
          }
        >
          <option value="createdAt">Created Date</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>

        {/* Sort Order */}
        <select
          className="input w-auto"
          value={filters.sortOrder || 'desc'}
          onChange={(e) =>
            onFilterChange({
              ...filters,
              sortOrder: e.target.value as Filters['sortOrder'],
            })
          }
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>
    </div>
  );
};
