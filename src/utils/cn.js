// Utility function for conditional className using Tailwind CSS

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default classNames;